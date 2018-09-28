package com.api.archivage.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.api.archivage.model.Binder;



@Repository
public interface BinderRepository extends JpaRepository<Binder, Long> {
	
	@Query("select b from Binder b where b.title like :x and b.description like :y")
	public Page<Binder> search(@Param("x")String title ,@Param("y") String desc, Pageable pageable );
	
	


}
