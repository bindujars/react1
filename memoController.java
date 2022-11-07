package com.august.memo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/memo")

public class memoController {
    @org.springframework.beans.factory.annotation.Autowired
    MemoService  service;
    
    @GetMapping("/requestparam")
    public String getmap(@RequestParam String name){
        System.out.println(name);
        return  service.getResult();
    }

    @GetMapping("/pathvariable/{id}")
    public String map(@PathVariable("id") String id){
        System.out.println(id);
        return  "ReqParam";
    }
    

    @GetMapping("/getmapping")
    public String getString(){
        return  service.getResult();
    }


    @PostMapping("/postmapping")
    public Object PostValues (@RequestBody Object name){
        return service.postResult(name);
    }
    @PutMapping("/putmapping")
    public Object PutValues(@RequestBody Object name){
        return  service.putResult(name);
    }

    @PatchMapping("/patchmapping/{id}")
    public String edituser(@PathVariable("id") String id){              /* @RequestBody Object data*/
        return service.patchResult(id);
    }

    @DeleteMapping("/deletemapping/{id}")
    public String deleteuser(@PathVariable("id") String id){
        return service.deleteResult(id);
    }
}
