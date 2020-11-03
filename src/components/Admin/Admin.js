import React, { Component } from 'react';
import BlogNew from './BlogNew'
import Bloglist from './BlogList'
class Admin extends Component {
    render() {
        return (
            <div>
                    <section>
                        <BlogNew></BlogNew>
                    </section>
                    
                <section><Bloglist></Bloglist></section>
                
            </div>
        );
    }
}

export default Admin;