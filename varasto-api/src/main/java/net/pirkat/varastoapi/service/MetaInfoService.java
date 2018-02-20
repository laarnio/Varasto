package net.pirkat.varastoapi.service;

import net.pirkat.varastoapi.domain.MetaInfo;
import net.pirkat.varastoapi.repository.MetaInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MetaInfoService {

    @Autowired
    private MetaInfoRepository metaInfoRepository;

    //Get all
    public List<MetaInfo> getAllMetaInfos() {
        List<MetaInfo> metaInfos = new ArrayList<>();
        metaInfoRepository.findAll()
                .forEach(metaInfos::add);
        return metaInfos;
    }

    //Get one
    public MetaInfo getMetaInfo(Long id) {
        return metaInfoRepository.findOne(id);
    }

    //Post new
    public MetaInfo addMetaInfo(MetaInfo metaInfo) {
        return metaInfoRepository.save(metaInfo);
    }

    //TODO: selvitä tää update
    //Update
    public MetaInfo updateMetaInfo(MetaInfo metaInfo) {
        return metaInfoRepository.save(metaInfo);
    }
}
