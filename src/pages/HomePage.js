import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => (
    <React.Fragment >

        <body>
            <header>
                <nav b-617jbvk8u3 class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div b-617jbvk8u3 class="container-fluid">
                        <a class="navbar-brand" href="/">FizzBuzzWeb</a>
                        <button b-617jbvk8u3 class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span b-617jbvk8u3 class="navbar-toggler-icon"></span>
                        </button>


                        <div b-617jbvk8u3 class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul b-617jbvk8u3 class="navbar-nav flex-grow-1">
                                <li b-617jbvk8u3 class="nav-item">
                                    <a class="nav-link text-dark" href="/">Home</a>
                                </li>
                                <li b-617jbvk8u3 class="nav-item">
                                    {/* <a class="nav-link text-dark" href="/Home/Privacy">Privacy</a> */}
                                    <Link className="nav-link" to="/Home/Privacy">Privacy</Link>
                                </li>
                            </ul>


                        </div>
                    </div>
                </nav>
            </header>


            <div b-617jbvk8u3 class="container">
                <main b-617jbvk8u3 role="main" class="pb-3">

                    <div class="text-center">
                        <h1 class="display-4">Welcome</h1>
                        <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
                    </div>



                </main>
            </div>

            <footer b-617jbvk8u3 class="border-top footer text-muted">
                <div b-617jbvk8u3 class="container">
                    {/* &copy; 2022 - FizzBuzzWeb - <a href="/Home/Privacy">Privacy</a> */}
                    &copy; 2022 - FizzBuzzWeb - <Link className="nav-link" to="/Home/Privacy">Privacy</Link>
                </div>
            </footer>
            <script src="/lib/jquery/dist/jquery.min.js"></script>
            <script src="/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="/js/site.js?v=4q1jwFhaPaZgr8WAUSrux6hAuh0XDg9kPS3xIVq36I0"></script>

        </body>
    </React.Fragment>
);
export default HomePage;


