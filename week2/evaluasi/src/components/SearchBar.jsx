function searchBar({ products, setFiltered}) {
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase()
        const result = products.filter( p => p.title.toLowerCase().includes(query))
        setFiltered(result)
    }

    return (
        <input 
        onChange={handleSearch} 
        placeholder="Cari barang apa nich..."
        className="border p-2 w-full mb-3 rounded-lg" 
        />
    )
}

export default searchBar