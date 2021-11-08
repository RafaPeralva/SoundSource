package soundsource.springframework.soundsourcebackend.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import soundsource.springframework.soundsourcebackend.repositories.PlaylistRepository;
import soundsource.springframework.soundsourcebackend.repositories.SuggestedRepository;


//creates objects and stores them into the H2 database
@Component
public class BootStrapData implements CommandLineRunner{

    private final SuggestedRepository suggestedRepository;
    private final PlaylistRepository playlistRepository;


    public BootStrapData(SuggestedRepository suggestedRepository, PlaylistRepository playlistRepository) {
        this.suggestedRepository = suggestedRepository;
        this.playlistRepository = playlistRepository;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
