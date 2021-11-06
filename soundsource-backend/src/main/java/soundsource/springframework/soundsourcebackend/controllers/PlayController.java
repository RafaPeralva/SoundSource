package soundsource.springframework.soundsourcebackend.controllers;

import com.wrapper.spotify.model_objects.miscellaneous.Device;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PlayController {

    @GetMapping(value = "play")
    public void playSong(String q) {
        if(q == null)
            q = "spotify:track:01iyCAUm8EvOFqVWYJ3dVX"; // Dancing Queen - Abba

        DeviceController.activateDevice();

        if(DeviceController.isActiveDevice()) {
            System.out.println("Play Passed");
            QueueController.addItemToUsersPlaybackQueue_Sync(q);
            SkipController.skipSong();
        } else {
            System.out.println("Play Failed");
            playSong(q);
        }
    }
}
