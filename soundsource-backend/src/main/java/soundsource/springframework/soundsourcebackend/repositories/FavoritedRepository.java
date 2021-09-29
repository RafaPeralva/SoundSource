package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.Favorited;

public interface FavoritedRepository extends CrudRepository<Favorited,Long> {

}
