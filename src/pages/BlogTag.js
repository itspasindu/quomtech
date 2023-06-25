import React from 'react'
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import { slugify } from "../utils"
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import BlogClassicData from '../data/blog/BlogClassic.json';
import BlogTagContainer from '../container/BlogGrid/BlogTagContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const BlogTag = () => {
    let {slug} = useParams();
    const data = BlogClassicData.map(blog => {
        return {
            ...blog,
            tags: blog.tags.filter(tag => slugify(tag) === slug)
        }
    }).filter(blog => blog.tags.length > 0);
    const tagTitle = data[0].tags[0]
    return (
        <React.Fragment>
            <SEO title="quomtech || Blog" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-four.jpg"
                title={tagTitle}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogTagContainer data={data}/>
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default BlogTag;
