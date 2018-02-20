package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.MetaInfo;
import net.pirkat.varastoapi.service.MetaInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class MetaInfoController {

    @Autowired
    private MetaInfoService metaInfoService;

    //Get all metainfos in one item
    @RequestMapping("categories/{categoryId}/items/{itemId}/metainfos")
    public List<MetaInfo> getAllMetaInfos(){
        return metaInfoService.getAllMetaInfos();
    }

    //Get one metainfo
    @RequestMapping("/categories/{categoryId}/items/{itemId}/metainfos/{id}")
    public MetaInfo getMetaInfo(@PathVariable Long id){
        return metaInfoService.getMetaInfo(id);
    }

    //Post new metainfo
    @RequestMapping(method= RequestMethod.POST, value="/categories/{categoryID}/items/{itemid}/metainfos")
    public MetaInfo addMetaInfo(@RequestBody MetaInfo metaInfo){
        return metaInfoService.addMetaInfo(metaInfo);
    }

    //Update metaInfo
    @RequestMapping(method=RequestMethod.PUT, value="/items/{itemid}/metainfos/{id}")
    public MetaInfo updateMetaInfo(@RequestBody MetaInfo metaInfo, @PathVariable Long id){
        metaInfo.setId(id);
        return metaInfoService.updateMetaInfo(metaInfo);
    }

}
