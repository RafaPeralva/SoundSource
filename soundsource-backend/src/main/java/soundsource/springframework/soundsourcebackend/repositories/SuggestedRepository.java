package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.Suggested;

public interface SuggestedRepository extends CrudRepository<Suggested,Long> {

}
