package com.api.archivage.resource.storage;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageService {
		//
	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("classes/static/assets");

	//----------------
	public void store(MultipartFile file, Long id) {
		try {
			Files.copy(file.getInputStream(), this.rootLocation.resolve( String.valueOf(id)+".pdf" ));
		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
	}

	//-----------------
	public Resource loadFile(String filename) {
		try {
			Path file = rootLocation.resolve(filename);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
	}
	
	
	//----------------
	public boolean deleteFile(Long id) throws IOException {
		
		return Files.deleteIfExists(this.rootLocation.resolve( String.valueOf(id)+".pdf" ));
		
	}
	
	
}

