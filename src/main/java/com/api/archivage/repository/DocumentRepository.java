package com.api.archivage.repository;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.api.archivage.model.Document;



@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
	
	//no dates
	@Query("select d from Document d where d.title like :e and d.description like :f and d.binder.title like :g"
			+ " and d.sender like :h and original like :i and receiver like :j")
	public Page<Document> search(@Param("e")String title ,@Param("f") String desc,@Param("g") String binder,
			@Param("h") String sender,@Param("i") String original,@Param("j") String receiver,Pageable pageable );

	//date_entree
	@Query("select d from Document d where d.title like :e and d.description like :f and d.binder.title like :g"
			+ " and d.sender like :h and original like :i and receiver like :j and date_entree = :k")
	public Page<Document> search2(@Param("e")String title ,@Param("f") String desc,@Param("g") String binder,
			@Param("h") String sender,@Param("i") String original,@Param("j") String receiver,
			@Param("k") Date date_entree ,Pageable pageable );

	//date_sortie
	@Query("select d from Document d where d.title like :e and d.description like :f and d.binder.title like :g"
			+ " and d.sender like :h and original like :i and receiver like :j and date_sortie = :k")
	public Page<Document> search3(@Param("e")String title ,@Param("f") String desc,@Param("g") String binder,
			@Param("h") String sender,@Param("i") String original,@Param("j") String receiver,
			@Param("k") Date date_sortie,Pageable pageable );

	//both dates
	@Query("select d from Document d where d.title like :e and d.description like :f and d.binder.title like :g"
			+ " and d.sender like :h and original like :i and receiver like :j and date_entree = :k and date_sortie = :l")
	public Page<Document> search4(@Param("e")String title ,@Param("f") String desc,@Param("g") String binder,
			@Param("h") String sender,@Param("i") String original,@Param("j") String receiver,@Param("k") Date date_entree,@Param("l") Date date_sortie,Pageable pageable );

	
	//
	@Query("SELECT COUNT(d) FROM Document d where d.binder.id = :x")
	public int countDocumentByBinder(@Param("x") Long id);


	//search document by binder_id
	@Query("SELECT d from Document d where d.binder.id = :e")
	public Page<Document> search5(@Param("e") Long binder,Pageable pageable);
	
	
	
}

