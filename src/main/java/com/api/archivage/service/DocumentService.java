package com.api.archivage.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.api.archivage.model.Binder;
import com.api.archivage.model.Document;
import com.api.archivage.repository.BinderRepository;
import com.api.archivage.repository.DocumentRepository;



@Service
public class DocumentService {
	@Autowired
	private DocumentRepository documentRepository;
	
	@Autowired
	private BinderRepository binderRepository;
	
	public List<Document> getAllDocument(){
		return documentRepository.findAll();	
		}
	
	public Optional<Document> getDocument(Long id){	
		return documentRepository.findById(id);
		}
	
	public Document save(Document d){		
		return documentRepository.save(d);
	}
	 
	public void delete(Long id){	
		documentRepository.deleteById(id);
	}
	

	public Document update(Long id, Document d){		
		d.setId(id);
		return documentRepository.save(d);
	}
	
	
	public Page<Document> search(String title ,String desc ,String binder ,String sender ,String original ,String receiver ,int page,int size ){	
		return documentRepository.search("%"+title+"%", "%"+desc+"%","%"+binder+"%","%"+sender+"%", "%"+original+"%","%"+receiver+"%" , new PageRequest(page , size));
	}
	
	public Page<Document> search2( String title ,String desc ,String binder ,String sender ,String original ,String receiver ,Date date_entree ,int page,int size ){	
		return documentRepository.search2("%"+title+"%", "%"+desc+"%","%"+binder+"%","%"+sender+"%", "%"+original+"%","%"+receiver+"%", date_entree , new PageRequest(page , size));
	}
	
	public Page<Document> search3( String title ,String desc ,String binder ,String sender ,String original ,String receiver ,Date date_sortie ,int page, int size ){	
		return documentRepository.search3("%"+title+"%", "%"+desc+"%","%"+binder+"%","%"+sender+"%", "%"+original+"%","%"+receiver+"%", date_sortie , new PageRequest(page , size));
	}
	
	
	public Page<Document> search4( String title ,String desc ,String binder ,String sender ,String original ,String receiver ,Date date_entree ,Date date_sortie ,int page,int size ){	
		return documentRepository.search4("%"+title+"%", "%"+desc+"%","%"+binder+"%","%"+sender+"%", "%"+original+"%","%"+receiver+"%", date_entree , date_sortie , new PageRequest(page , size));
	}
	

	public Long totalDocuments(){
		return documentRepository.count();	
		}
	
	
	public Map<Long , Integer> countDocumentByBinder(){
		Map<Long,Integer> statisticsBinder = new HashMap<>();
		
		List<Binder> binders = binderRepository.findAll();
		
		for (Binder binder : binders) {
			statisticsBinder.put(binder.getId(), documentRepository.countDocumentByBinder(binder.getId()));
		}
		
		return statisticsBinder;
		}
	
	public Page<Document> search5( Long binder,int page,int size ){	
		return documentRepository.search5(binder, new PageRequest(page , size));
	}
	
	

}
