package soundsource.springframework.soundsourcebackend.controllers;

import com.wrapper.spotify.model_objects.miscellaneous.Device;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PlayController {

    @GetMapping(value = "play")
    public void playSong(String trackUri) {
        if(trackUri == null)
            trackUri = "spotify:track:7J2gyNghNTzl4EsLhXp01Q"; // Infinity (888) - XXXTENTACION ft. Joey Bada$$

        DeviceController.activateDevice();

        if(DeviceController.isActiveDevice()) {
            System.out.println("Play Passed");
            QueueController.addItemToUsersPlaybackQueue_Sync(trackUri);
            SkipController.skipSong();
        } else {
            System.out.println("Play Failed");
            playSong(trackUri);
        }
    }
}
