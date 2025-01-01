import React,{useState} from 'react'
import './ProtfolioComponent.css'
import Title from '../../common/Title/Title'

const AllPortfolio = () => {
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabs = [
        { tab: 'All' },
        { tab: 'Commercial' },
        { tab: 'Short Movie' },
        { tab: 'Photography' },
        { tab: 'Music Video' },
    ]
    
    const renderContent = () => {
        switch (activeTab) {
          case 'All':
            return <p>Showing content for All.</p>;
          case 'Commercial':
            return <p>Showing content for Commercial.</p>;
          case 'Short Movie':
            return <p>Showing content for Short Movie.</p>;
          case 'Photography':
            return <p>Showing content for Photography.</p>;
          case 'Music Video':
            return <p>Showing content for Music Video.</p>;
          default:
            return <p>Select a tab to view content.</p>;
        }
      };
  return (
    <div className='container'>
        <Title title='My Portfolio'/>    
        <div>
            {/* Tab buttons */}
            <div className="tabs">
                {tabs.map((item,index)=>(
                    <button
                        key={index}
                        className={`tab ${activeTab === item.tab ? "active" : ""}`}
                        onClick={() => handleTabClick(item.tab)}
                    >
                        {item.tab}
                    </button>
                ))} 
            </div>

            {/* Tab content */}
            <div className="tab-content">
                <p>Showing content for: {activeTab}</p>
                {/* You can render specific content here based on the activeTab */}
            </div>
        </div>
    </div>
  )
}

export default AllPortfolio