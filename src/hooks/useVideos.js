import {useState, useEffect} from React;
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, []);

    const search = async (term) => {
        // Add await keyword infront of API code
        const response = await youtube.get('/search', {
          params: {
            q: term,
          },
        });
    
        // Change the state
        setVideos(response.data.items);
    };

    // We can return array(React Convention) OR object(JS Convention)
    return [videos, onTermSubmit];
};

export default useVideos;