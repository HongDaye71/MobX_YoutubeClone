import { useEffect, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import { useObserver  } from 'mobx-react';
import store from './store/store';

function App() {
  const { videoStore } = store();

  useEffect(()=> {
    videoStore.mountMostPopular();
  }, []);

  const selectVideo = video => {
    videoStore.mountSelectVideo(video);
  }

  const search = useCallback(query => {
      videoStore.mountSearch(query);
      videoStore.mountMostPopular();
      videoStore.mountSelectVideo(null);
  },[]);

  return useObserver(() => (
    <div className={styles.app}>
    <SearchHeader onSearch={search}/> 
    <section className={styles.content}>
    {videoStore.selectedVideo && (
      <div className={styles.detail}>
        <VideoDetail video={videoStore.selectedVideo} />
      </div>
    )}
      <div className={styles.list}>
        <VideoList 
          videos={videoStore.videos} 
          onVideoClick={selectVideo}
          display={videoStore.selectedVideo ? 'list' : 'grid'}
        />
      </div>
    </section>
  </div>
  ))
}

export default App;

