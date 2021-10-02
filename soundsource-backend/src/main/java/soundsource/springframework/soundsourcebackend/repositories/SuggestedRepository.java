package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.Suggested;

//Repositories are responsible for persistence and query operations on JPA entities.
public interface SuggestedRepository extends CrudRepository<Suggested,Long> {

}
