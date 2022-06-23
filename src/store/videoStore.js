import { runInAction, observable } from 'mobx';
import Youtube from '../service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const videoStore = observable({
    videos : [],
    selectedVideo : null,

    mountMostPopular() {
            youtube
            .mostPopular()
            .then(result => runInAction((() => {this.videos = result})))
    },

    mountSelectVideo(event) {
        runInAction((() => {
            this.selectedVideo = event
        }))
    },  

    mountSearch(query) {
        youtube
        .search(query)
        .then(videos => runInAction((() => {this.videos = videos})))
        runInAction((() => {this.setSelectedVideo = null}));
    }
});

export { videoStore };
