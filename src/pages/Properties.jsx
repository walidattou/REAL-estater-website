import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Contact.css";

// Import icons (replace with your preferred icon library)
const SearchIcon = () => <span className="icon">🔍</span>
const FilterIcon = () => <span className="icon">⚙️</span>
const MapIcon = () => <span className="icon">🗺️</span>
const GridIcon = () => <span className="icon">▤</span>
const ListIcon = () => <span className="icon">☰</span>
const HeartIcon = () => <span className="icon">♡</span>
const BedIcon = () => <span className="icon">🛏️</span>
const BathIcon = () => <span className="icon">🚿</span>
const AreaIcon = () => <span className="icon">📏</span>
import house1 from '../assets/images/house1.jpeg';
function Properties() {
  // State for filters and view options
  const [viewMode, setViewMode] = useState("grid")
  const [showMap, setShowMap] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([500000, 5000000])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([])
  const [selectedBedrooms, setSelectedBedrooms] = useState("")
  const [selectedBathrooms, setSelectedBathrooms] = useState("")
  const [sortOption, setSortOption] = useState("featured")

  // Sample property data (would come from API in real application)
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Oceanfront Luxury Villa",
      address: "123 Coastal Drive, Malibu, CA",
      price: 4750000,
      beds: 5,
      baths: 6,
      sqft: 6200,
      type: "Villa",
      featured: true,
      new: false,
      image: house1,
      description:
        "Breathtaking oceanfront villa with panoramic views, infinity pool, and direct beach access. Features include a gourmet kitchen, home theater, and expansive outdoor living areas.",
    },
    {
      id: 2,
      title: "Modern Downtown Penthouse",
      address: "789 Skyline Ave, Los Angeles, CA",
      price: 3250000,
      beds: 3,
      baths: 3.5,
      sqft: 3800,
      type: "Penthouse",
      featured: true,
      new: true,
      image: house1,
      description:
        "Stunning penthouse with floor-to-ceiling windows offering 360° city views. Features include smart home technology, private elevator, and rooftop terrace with hot tub.",
    },
    {
      id: 3,
      title: "Historic Estate with Gardens",
      address: "456 Heritage Lane, Beverly Hills, CA",
      price: 8900000,
      beds: 7,
      baths: 8,
      sqft: 9500,
      type: "Estate",
      featured: true,
      new: false,
      image: house1,
      description:
        "Magnificent historic estate on 2 acres of manicured gardens. Features include a grand ballroom, wine cellar, guest house, and tennis court with pool house.",
    },
    {
      id: 4,
      title: "Contemporary Hillside Retreat",
      address: "234 Canyon View, Hollywood Hills, CA",
      price: 5600000,
      beds: 4,
      baths: 5,
      sqft: 4800,
      type: "House",
      featured: false,
      new: false,
      image: house1,
      description:
        "Architectural masterpiece with walls of glass showcasing city and canyon views. Features include an infinity edge pool, home gym, and designer finishes throughout.",
    },
    {
      id: 5,
      title: "Waterfront Luxury Condo",
      address: "567 Harbor Blvd, Marina Del Rey, CA",
      price: 2100000,
      beds: 2,
      baths: 2.5,
      sqft: 2200,
      type: "Condo",
      featured: false,
      new: true,
      image: house1,
      description:
        "Exquisite waterfront condo with private boat slip. Features include high-end finishes, gourmet kitchen, and expansive terrace perfect for entertaining.",
    },
    {
      id: 6,
      title: "Mediterranean Villa with Vineyard",
      address: "890 Vineyard Estates, Napa Valley, CA",
      price: 7500000,
      beds: 6,
      baths: 7,
      sqft: 7800,
      type: "Villa",
      featured: true,
      new: false,
      image: house1,
      description:
        "Stunning Mediterranean-style villa on 10 acres with producing vineyard. Features include wine cellar, tasting room, infinity pool, and outdoor kitchen.",
    },
    {
      id: 4,
      title: "Contemporary Hillside Retreat",
      address: "234 Canyon View, Hollywood Hills, CA",
      price: 5600000,
      beds: 4,
      baths: 5,
      sqft: 4800,
      type: "House",
      featured: false,
      new: false,
      image: house1,
      description:
        "Architectural masterpiece with walls of glass showcasing city and canyon views. Features include an infinity edge pool, home gym, and designer finishes throughout.",
    }
    
  ])

  // Filter property types options
  const propertyTypes = ["House", "Condo", "Penthouse", "Villa", "Estate", "Townhouse"]

  // Handle property type selection
  const togglePropertyType = (type) => {
    if (selectedPropertyTypes.includes(type)) {
      setSelectedPropertyTypes(selectedPropertyTypes.filter((item) => item !== type))
    } else {
      setSelectedPropertyTypes([...selectedPropertyTypes, type])
    }
  }

  // Handle price range change
  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange]
    newPriceRange[index] = parseInt(e.target.value)
    setPriceRange(newPriceRange)
  }

  // Filter and sort properties
  const filteredProperties = properties
    .filter((property) => {
      // Filter by price
      if (property.price < priceRange[0] || property.price > priceRange[1]) {
        return false
      }

      // Filter by property type
      if (selectedPropertyTypes.length > 0 && !selectedPropertyTypes.includes(property.type)) {
        return false
      }

      // Filter by bedrooms
      if (selectedBedrooms && property.beds < parseInt(selectedBedrooms)) {
        return false
      }

      // Filter by bathrooms
      if (selectedBathrooms && property.baths < parseInt(selectedBathrooms)) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      // Sort properties
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "newest":
          return b.new ? 1 : -1
        case "featured":
        default:
          return b.featured ? 1 : -1
      }
    })

  // Format price with commas
  const formatPrice = (price) => {
    return "$" + price.toLocaleString()
  }

  return (
    <div className="properties-page">
      {/* Hero Section */}
    
      <section
                  className="properties-hero"
                  style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${house1})`,
              
        }}
        >
            <div className="hero-content">
            <h1>Luxury Properties</h1>
            <p>Discover exceptional homes in the most desirable locations</p>
            </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="search-filter-bar">
        <div className="search-container">
          <div className="search-input-container">
            <SearchIcon />
            <input type="text" placeholder="Search by location, property name, or keyword..." />
          </div>
          <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
            <FilterIcon /> Filters
          </button>
        </div>

        {/* Expanded Filters */}
        <div className={`expanded-filters ${showFilters ? "show" : ""}`}>
          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range-inputs">
              <div className="price-input">
                <label>Min</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  min="0"
                  step="50000"
                />
              </div>
              <div className="price-input">
                <label>Max</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  min="0"
                  step="50000"
                />
              </div>
            </div>
            <div className="price-range-slider">
              <input
                type="range"
                min="0"
                max="10000000"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="range-slider"
              />
              <input
                type="range"
                min="0"
                max="10000000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="range-slider"
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Property Type</h3>
            <div className="property-types">
              {propertyTypes.map((type) => (
                <div className="property-type-option" key={type}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedPropertyTypes.includes(type)}
                      onChange={() => togglePropertyType(type)}
                    />
                    <span>{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Bedrooms</h3>
            <select value={selectedBedrooms} onChange={(e) => setSelectedBedrooms(e.target.value)}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="filter-section">
            <h3>Bathrooms</h3>
            <select value={selectedBathrooms} onChange={(e) => setSelectedBathrooms(e.target.value)}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="filter-actions">
            <button className="reset-filters">Reset Filters</button>
            <button className="apply-filters" onClick={() => setShowFilters(false)}>
              Apply Filters
            </button>
          </div>
        </div>
      </section>

      {/* Results Controls */}
      <section className="results-controls">
        <div className="results-count">
          <span>{filteredProperties.length} Properties Found</span>
        </div>

        <div className="view-controls">
          <div className="sort-control">
            <label>Sort by:</label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="display-controls">
            <button
              className={`view-button ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
            <button
              className={`view-button ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <ListIcon />
            </button>
            <button
              className={`view-button ${showMap ? "active" : ""}`}
              onClick={() => setShowMap(!showMap)}
              aria-label="Map view"
            >
              <MapIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Properties Display */}
      <section className="properties-display">
        {showMap ? (
          <div className="map-view">
            <div className="map-placeholder">
              <h3>Interactive Map</h3>
              <p>Map view would be integrated here with property pins</p>
            </div>
            <div className={`map-properties ${viewMode}`}>
              {filteredProperties.map((property) => (
                <div key={property.id} className="map-property-card">
                  <img src={property.image || "/placeholder.svg"} alt={property.title} />
                  <div className="map-property-info">
                    <h3>{property.title}</h3>
                    <p className="property-price">{formatPrice(property.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`properties-grid ${viewMode}`}>
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="property-card">
                  <div className="property-image">
                    <img src={property.image || "/placeholder.svg"} alt={property.title} />
                    <button className="favorite-button" aria-label="Add to favorites">
                      <HeartIcon />
                    </button>
                    {property.featured && <span className="property-tag featured">Featured</span>}
                    {property.new && <span className="property-tag new">New</span>}
                  </div>
                  <div className="property-details">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-address">{property.address}</p>
                    
                    <div className="property-features">
                      <div className="feature">
                        <BedIcon />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="feature">
                        <BathIcon />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="feature">
                        <AreaIcon />
                        <span>{property.sqft.toLocaleString()} Sq Ft</span>
                      </div>
                    </div>
                    {viewMode === "list" && <p className="property-description">{property.description}</p>}
                    <Link to={`/properties/${property.id}`} className="view-property">
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No properties match your search criteria</h3>
                <p>Try adjusting your filters to see more results</p>
                <button className="reset-filters">Reset All Filters</button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Pagination */}
      <section className="pagination">
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <span className="pagination-ellipsis">...</span>
        <button className="pagination-button">10</button>
        <button className="pagination-button next">Next</button>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Can't find what you're looking for?</h2>
          <p>Our real estate experts are here to help you find your perfect property</p>
          <Link to="/contact" className="contact-button">
            Contact an Agent
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Properties
