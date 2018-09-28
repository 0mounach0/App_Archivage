package com.api.archivage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.api.archivage.model.Binder;
import com.api.archivage.repository.BinderRepository;



@Service
public class BinderService {
	
	@Autowired
	private BinderRepository binderRipository;
	
	
	public List<Binder> getAllBinders(){
		return binderRipository.findAll();
	}
	
	
	public Optional<Binder> getBinder(Long id){	
		return binderRipository.findById(id);
	}
	
	public Binder save(Binder b){		
		return binderRipository.save(b);
	} 
	
	public void delete(Long id){	
		binderRipository.deleteById(id);
	}
	
	public Binder update(Long id,Binder b){		
		b.setId(id);
		return binderRipository.save(b);
	} 
	
	
	public Page<Binder> search(String title ,String desc ,int page,int size ){	
		return binderRipository.search("%"+title+"%", "%"+desc+"%", new PageRequest(page , size));
	}
	
	
	public Long totalBinders(){
		return binderRipository.count();
	}
	
	
}

