import React from 'react';
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import { slugify } from "../utils"
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import BlogClassicData from '../data/blog/BlogClassic.json';
import BlogCategoryContainer from '../container/BlogGrid/BlogCategoryContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const BlogCategories = () => {
    let {slug} = useParams();
    const data = BlogClassicData.map(blog => {
        return {
            ...blog,
            categories: blog.categories.filter(cat => slugify(cat) === slug)
        }
    }).filter(blog => blog.categories.length > 0);
    const categoryTitle = data[0].categories[0]
    return (
        <React.Fragment>
            <SEO title="quomtech || Blog" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-four.jpg"
                title={categoryTitle}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogCategoryContainer data={data}/>
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}


export default BlogCategories;
