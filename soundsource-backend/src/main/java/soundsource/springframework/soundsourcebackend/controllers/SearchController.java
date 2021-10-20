package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.data.search.simplified.*;
import com.wrapper.spotify.model_objects.specification.Paging;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class SearchController {

    @GetMapping(value = "search")
    public Track[] searchTracks (String q){

        final SearchTracksRequest searchTracksRequest = spotifyApi.searchTracks(q)
                .q(q)
                .limit(10)
                .build();

        try {

            final Paging<Track> trackPaging = searchTracksRequest.execute();

            // return top Tracks as JSON
            return trackPaging.getItems();
        } catch (Exception e) {
            System.out.println("Something went wrong!\n" + e.getMessage());
        }
        return new Track[0];
      }
}
