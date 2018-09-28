package com.api.archivage.resource;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.archivage.model.Document;
import com.api.archivage.service.DocumentService;



@RestController
@CrossOrigin("*")
public class DocumentController {
	@Autowired
	private DocumentService documentService;
	
	@RequestMapping(value = "/document", method = RequestMethod.GET)
	public List<Document> getAllDocument(){
		return documentService.getAllDocument();	
		}
	
	@RequestMapping(value = "/document/{id}",method = RequestMethod.GET)
	public Optional<Document> getDocument(@PathVariable(value = "id") Long id){	
		return documentService.getDocument(id);
		}
	
	@RequestMapping(value = "/document",method = RequestMethod.POST)
	public Document save(@RequestBody Document d){		
		return documentService.save(d);
	}
	 
	@RequestMapping(value = "/document/{id}",method = RequestMethod.DELETE)
	public boolean delete(@PathVariable(value = "id") Long id){	
		documentService.delete(id);
		return true;
	}
	

	@RequestMapping(value = "/document/{id}",method = RequestMethod.PUT)
	public Document update(@PathVariable Long id, @RequestBody Document d){		
		d.setId(id);
		return documentService.save(d);
	}
	
	
	@RequestMapping(value = "/searchDocument",method = RequestMethod.GET)
	public Page<Document> search(    @RequestParam(name = "title", defaultValue="") String title ,
								     @RequestParam(name = "desc", defaultValue="") String desc ,
								     @RequestParam(name = "binder", defaultValue="") String binder ,
								     @RequestParam(name = "sender", defaultValue="") String sender ,
								     @RequestParam(name = "original", defaultValue="") String original ,
								     @RequestParam(name = "receiver", defaultValue="") String receiver ,
								     @RequestParam(name = "page", defaultValue="0") int page,
								     @RequestParam(name = "size", defaultValue="5") int size ){	
		return documentService.search(title, desc,binder,sender, original,receiver , page , size);
	}
	
	@RequestMapping(value = "/searchDocument2",method = RequestMethod.GET)
	public Page<Document> search2(    @RequestParam(name = "title", defaultValue="") String title ,
								     @RequestParam(name = "desc", defaultValue="") String desc ,
								     @RequestParam(name = "binder", defaultValue="") String binder ,
								     @RequestParam(name = "sender", defaultValue="") String sender ,
								     @RequestParam(name = "original", defaultValue="") String original ,
								     @RequestParam(name = "receiver", defaultValue="") String receiver ,
								     @RequestParam(name = "date_entree", defaultValue="")@DateTimeFormat(pattern="yyyy-MM-dd") Date date_entree ,
								     @RequestParam(name = "page", defaultValue="0") int page,
								     @RequestParam(name = "size", defaultValue="5") int size ){	
		return documentService.search2(title,desc,binder,sender,original,receiver, date_entree , page , size);
	}
	
	@RequestMapping(value = "/searchDocument3",method = RequestMethod.GET)
	public Page<Document> search3(    @RequestParam(name = "title", defaultValue="") String title ,
								     @RequestParam(name = "desc", defaultValue="") String desc ,
								     @RequestParam(name = "binder", defaultValue="") String binder ,
								     @RequestParam(name = "sender", defaultValue="") String sender ,
								     @RequestParam(name = "original", defaultValue="") String original ,
								     @RequestParam(name = "receiver", defaultValue="") String receiver ,
								     @RequestParam(name = "date_sortie", defaultValue="")@DateTimeFormat(pattern="yyyy-MM-dd") Date date_sortie ,
								     @RequestParam(name = "page", defaultValue="0") int page,
								     @RequestParam(name = "size", defaultValue="5") int size ){	
		return documentService.search3(title, desc,binder,sender, original,receiver, date_sortie ,page , size);
	}
	
	@RequestMapping(value = "/searchDocument4",method = RequestMethod.GET)
	public Page<Document> search4(    @RequestParam(name = "title", defaultValue="") String title ,
								     @RequestParam(name = "desc", defaultValue="") String desc ,
								     @RequestParam(name = "binder", defaultValue="") String binder ,
								     @RequestParam(name = "sender", defaultValue="") String sender ,
								     @RequestParam(name = "original", defaultValue="") String original ,
								     @RequestParam(name = "receiver", defaultValue="") String receiver ,
								     @RequestParam(name = "date_entree", defaultValue="")@DateTimeFormat(pattern="yyyy-MM-dd") Date date_entree ,
								     @RequestParam(name = "date_sortie", defaultValue="")@DateTimeFormat(pattern="yyyy-MM-dd") Date date_sortie ,
								     @RequestParam(name = "page", defaultValue="0") int page,
								     @RequestParam(name = "size", defaultValue="5") int size ){	
		return documentService.search4(title, desc,binder,sender, original,receiver, date_entree , date_sortie , page , size);
	}
	

	@RequestMapping(value = "/totalDocuments", method = RequestMethod.GET)
	public Long totalDocuments(){
		return documentService.totalDocuments();	
		}
	
	@RequestMapping(value = "/countDocumentByBinder", method = RequestMethod.GET)
	public Map<Long , Integer> countDocumentByBinder(){
		return documentService.countDocumentByBinder();	
		}
	
	
	@RequestMapping(value = "/searchDocument5",method = RequestMethod.GET)
	public Page<Document> search5(   @RequestParam(name = "binder", defaultValue="0") Long binder,
								     @RequestParam(name = "page", defaultValue="0") int page,
								     @RequestParam(name = "size", defaultValue="5") int size ){	
		return documentService.search5(binder, page , size);
	}
	

}

