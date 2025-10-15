function CategoryFilter({ products, setFiltered }) {
    const handleFilter = (e) => {
        const category = e.target.value
        if(category === 'all') setFiltered (products)
        else setFiltered (products.filter(p => p.category === category))
    }


    
    return(
        <select onChange={handleFilter}  className="border p-2 mb-4 rounded-lg w-[150px] bg-gray-300 text-gray-800">
            <option value="all">Semua Kategori</option>
            <option value="electronics">Barang Elektronik</option>
            <option value="jewelery">Perhiasan</option>
            <option value="men's clothing">Pakaian pria</option>
            <option value="women's clothing">Pakaian Wanita</option>
        </select>
    )
}

export default CategoryFilter