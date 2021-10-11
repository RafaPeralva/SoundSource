package soundsource.springframework.soundsourcebackend.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import soundsource.springframework.soundsourcebackend.repositories.UserRepository;


//creates objects and stores them into the H2 database
@Component
public class BootStrapData implements CommandLineRunner{

    private final UserRepository userRepository;


    public BootStrapData(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
