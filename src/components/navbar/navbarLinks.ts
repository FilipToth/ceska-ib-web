interface DropdownEntry {
    text: string;
    redirect: string;
    icon: string;
}

interface DropdownMenu {
    text: string,
    items: DropdownEntry[]
}

interface SimpleNavbarItem {
    text: string,
    redirect: string
}

interface ComplexDropdownMenu {
    text: string,
    subcategories: DropdownMenu[]
}

type NavbarItem = DropdownMenu | SimpleNavbarItem | ComplexDropdownMenu;

interface NavbarItems {
    items: NavbarItem[]
}

const isDropdownMenu = (item: NavbarItem): item is DropdownMenu => {
    const menu = item as DropdownMenu;
    return Array.isArray(menu.items);
};

const isSimpleNavbarItem = (item: NavbarItem): item is SimpleNavbarItem => {
    const simple = item as SimpleNavbarItem;
    return simple.redirect != null && typeof simple.redirect == "string";
};

const isComplexDropdownMenu = (item: NavbarItem): item is ComplexDropdownMenu => {
    const complex = item as ComplexDropdownMenu;
    return typeof complex.subcategories == 'object';
};

export {
    type DropdownEntry,
    type DropdownMenu,
    type SimpleNavbarItem,
    type ComplexDropdownMenu,
    type NavbarItem,
    type NavbarItems,
    isSimpleNavbarItem,
    isDropdownMenu,
    isComplexDropdownMenu
};