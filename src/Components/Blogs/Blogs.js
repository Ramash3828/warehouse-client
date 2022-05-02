import React from "react";

const Blogs = () => {
    return (
        <div className="container my-5">
            <div className="title mb-4">BLOGS HERE</div>
            <div className="row">
                <div className="col-md-3">
                    <h5>
                        <strong>Q: </strong> Difference between javascript and
                        nodejs.
                    </h5>
                    <p>
                        <strong>Ans: </strong> JavaScript using for any
                        client-side activity for a web application. JavaScript
                        is a programming language. It is running in any web
                        browser with a proper browser engine. But NodeJS is a
                        cross-platform and opensource Javascript runtime
                        environment that allows the javascript to be run on the
                        server-side. Nodejs allows Javascript code to run
                        outside the browser. Nodejs comes with a lot of modules
                        and mostly used in web development. Node JS only run in
                        a V8 engine which mainly used by google chrome. And
                        javascript program which will be written under this Node
                        JS will be always run in V8 Engine.
                    </p>
                </div>
                <div className="col-md-3">
                    <h5>
                        <strong>Q: </strong> Differences between sql and nosql
                        databases.{" "}
                    </h5>
                    <p>
                        <strong>Ans: </strong> SQL means Sturctural Query
                        Language. SQL databases are vertically scalable, while
                        NoSQL databases are horizontally scalable. SQL databases
                        are table-based, while NoSQL databases are document,
                        key-value, graph, or wide-column stores. SQL databases
                        are better for multi-row transactions, while NoSQL is
                        better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className="col-md-3">
                    <h5>
                        <strong>Q: </strong> When should you use nodejs and when
                        should you use mongodb?
                    </h5>
                    <p>
                        <strong>Ans: </strong> Node. js is primarily used for
                        non-blocking, event-driven servers. its single-threaded
                        nature. It's used for traditional web sites and back-end
                        API services. Other hands MongoDB represents the data as
                        a collection of documents.Tables related by foreign
                        keys. This makes it possible for the varied types of
                        data dealt over the internet to be stored decently and
                        accessed in the web applications using Node. js.
                    </p>
                </div>
                <div className="col-md-3">
                    <h5>
                        <strong>Q: </strong> What is the purpose of jwt and how
                        does it work?
                    </h5>
                    <p>
                        <strong>Ans: </strong> JWT, or JSON Web Token, is an
                        open standard used to share security information between
                        two parties — a client and a server.JWT can be used as
                        an access token to prevent unwanted access to a
                        protected resource. They're often used as Bearer tokens,
                        which the API will decode and validate before sending
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
