package com.api.archivage.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.archivage.model.Binder;
import com.api.archivage.service.BinderService;


@RestController
@CrossOrigin("*")
public class BinderController {
	
	@Autowired
	private BinderService binderService;
	
	@RequestMapping(value = "/binder",method = RequestMethod.GET)
	public List<Binder> getAllBinders(){
		return binderService.getAllBinders();
	}
	
	
	@RequestMapping(value = "/binder/{id}",method = RequestMethod.GET)
	public Optional<Binder> getBinder(@PathVariable(value = "id") Long id){	
		return binderService.getBinder(id);
	}
	
	@RequestMapping(value = "/binder",method = RequestMethod.POST)
	public Binder save(@RequestBody Binder b){		
		return binderService.save(b);
	} 
	
	@RequestMapping(value = "/binder/{id}",method = RequestMethod.DELETE)
	public boolean delete(@PathVariable(value = "id") Long id){	
		binderService.delete(id);
		return true;
	}
	
	@RequestMapping(value = "/binder/{id}",method = RequestMethod.PUT)
	public Binder update(@PathVariable Long id, @RequestBody Binder b){		
		b.setId(id);
		return binderService.save(b);
	} 
	
	
	@RequestMapping(value = "/searchBinder",method = RequestMethod.GET)
	public Page<Binder> search(    @RequestParam(name = "title", defaultValue="") String title ,
								   @RequestParam(name = "desc", defaultValue="") String desc ,
								   @RequestParam(name = "page", defaultValue="0") int page,
								   @RequestParam(name = "size", defaultValue="5") int size ){	
		return binderService.search(title,desc, page , size);
	}
	
	
	@RequestMapping(value = "/totalBinders",method = RequestMethod.GET)
	public Long totalBinders(){
		return binderService.totalBinders();
	}
	
	
}
