import { useState } from "react";
import DataTable from "react-data-table-component";
import AboutSection from "./aboutSection";
import BlogSection from "./blogsection";
import Contact from "./contact";
import HomeSection from "./home";
import PriceSection from "./pricesection";
import Project from "./project";
import Review from "./review";
import Service from "./service";

function Admin() {
    const data = [
        { name: "Home Section", component: HomeSection },
        { name: "About Section", component: AboutSection },
        { name: "Service", component: Service },
        { name: "Project", component: Project },
        { name: "Review", component: Review },
        { name: "Pricing", component: PriceSection },
        { name: "Contact", component: Contact },
        { name: "Blog Section", component: BlogSection },
    ];

    const [PageComponent, setPageComponent] = useState(null);
    const [pageName,setPageName]=useState('');
    const [showTable, setShowTable] = useState(true);
    const [isPage,setIsPage]=useState(false);

    function handleClick(row) {
        console.log("row:", row);
        setShowTable(false);
        setIsPage(true);
        setPageComponent(() => row.component);
        setPageName(row.name) // Set the component directly
    }

    function handleBack(){
        console.log("PageComponent",PageComponent);
        setIsPage(false);
        setShowTable(true);
    }

    const columns = [
        {
            name: 'Component Name',
            selector: row => row.name,
        },
        {
            name: 'Action',
            cell: row => (
                <button className="btn-custom btn-primary" onClick={() => handleClick(row)}>
                    Edit
                </button>
            ),
        },
    ];

    return (
        <section className="about" id="about">
            <h1>This is the admin Page</h1>
            {showTable ? (
                <DataTable columns={columns} fixedHeader={true} data={data} />
            ) : (
                <>
                    <h3>Edit functionality for {pageName}</h3>
                    <button className="btn btn-primary" onClick={handleBack}>
                        Back
                    </button>
                    {/* {page && <page isPage={true} />} Render the component dynamically */}
                    {PageComponent && <PageComponent isPage={isPage} />} {/* Render the component dynamically */}
                </>
            )}
        </section>
    );
}

export default Admin;
