package net.pirkat.varastoapi.repository;

import net.pirkat.varastoapi.domain.MetaInfo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MetaInfoRepository extends CrudRepository<MetaInfo, Long> {

}

