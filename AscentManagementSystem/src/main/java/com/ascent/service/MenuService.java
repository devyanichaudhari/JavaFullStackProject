package com.ascent.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ascent.entity.Menu;

@Service
public interface MenuService {
	Menu createMenu(Menu m);
	Menu updateMenu(Menu m) ;
	List<Menu> getAllMenu();
	Menu getMenuById(int id);
	void deleteMenu(int id);
}
