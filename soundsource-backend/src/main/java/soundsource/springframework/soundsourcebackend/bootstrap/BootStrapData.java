package soundsource.springframework.soundsourcebackend.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import soundsource.springframework.soundsourcebackend.repositories.FavoritedRepository;
import soundsource.springframework.soundsourcebackend.repositories.SuggestedRepository;
import soundsource.springframework.soundsourcebackend.repositories.UserRepository;


//creates objects and stores them into the H2 database
@Component
public class BootStrapData implements CommandLineRunner{

    private final UserRepository userRepository;
    private final SuggestedRepository suggestedRepository;
    private final FavoritedRepository favoritedRepository;

    public BootStrapData(UserRepository userRepository, SuggestedRepository suggestedRepository, FavoritedRepository favoritedRepository) {
        this.userRepository = userRepository;
        this.suggestedRepository = suggestedRepository;
        this.favoritedRepository = favoritedRepository;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
