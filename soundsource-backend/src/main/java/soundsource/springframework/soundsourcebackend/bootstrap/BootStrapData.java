package soundsource.springframework.soundsourcebackend.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import soundsource.springframework.soundsourcebackend.repositories.SuggestedRepository;


//creates objects and stores them into the H2 database
@Component
public class BootStrapData implements CommandLineRunner{

    private final SuggestedRepository suggestedRepository;


    public BootStrapData(SuggestedRepository suggestedRepository) {
        this.suggestedRepository = suggestedRepository;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
