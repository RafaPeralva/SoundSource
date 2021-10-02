package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.Favorited;

//Repositories are responsible for persistence and query operations on JPA entities.
public interface FavoritedRepository extends CrudRepository<Favorited,Long> {

}
