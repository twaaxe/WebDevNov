export default function Header() {
    return(
        <>
         
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#"><i class="fas fa-warehouse me-2"></i>1337's Warehouse</a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#" aria-current="page">Products <span
                                        class="visually-hidden">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#" aria-current="page">Summary Cart <span
                                        class="visually-hidden">(current)</span></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        
        </>
    )
}