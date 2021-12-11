package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import soundsource.springframework.soundsourcebackend.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
