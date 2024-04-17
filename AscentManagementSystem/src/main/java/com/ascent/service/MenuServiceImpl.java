package com.ascent.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ascent.entity.Menu;
import com.ascent.exception.RestuarantResource;
import com.ascent.repository.MenuRepository;

@Service
public class MenuServiceImpl implements MenuService{
	@Autowired
	MenuRepository menuRepo;

	@Override
	public Menu createMenu(Menu m) {
		
		return menuRepo.save(m);
	}

	@Override
	public Menu updateMenu(Menu m) {
		Optional<Menu> menu = menuRepo.findById(m.getId());
		if(menu.isPresent())
		{
			Menu updateMenu = menu.get();
			updateMenu.setId(m.getId());;
			updateMenu.setMenuName(m.getMenuName());
			updateMenu.setPrice(m.getPrice());
			menuRepo.save(updateMenu);
			return updateMenu;
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
	}

	@Override
	public List<Menu> getAllMenu() {
		
		return menuRepo.findAll();
	}

	@Override
	public Menu getMenuById(int id) {
		Optional<Menu> menu = menuRepo.findById(id);
		if(menu.isPresent())
		{
			return menu.get();		
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
	}

	@Override
	public void deleteMenu(int id) {
		Optional<Menu> menu1 = menuRepo.findById(id);
		if(menu1.isPresent())
		{
			menuRepo.delete(menu1.get());		
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
		
	}

}
