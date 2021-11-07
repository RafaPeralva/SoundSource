package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import soundsource.springframework.soundsourcebackend.domain.Suggested;

public interface SuggestedRepository extends JpaRepository<Suggested,String> {

}
