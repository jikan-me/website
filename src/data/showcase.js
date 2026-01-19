
        title: "Anime Reference",
        summary: "Anime Reference is an iOS app to find and discover anime and manga and check out all their details.",
        imageUrl: "https://i.imgur.com/BZ3Cpa4.png",
        url: "https://apps.apple.com/us/app/anime-reference/id1498269603",
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimeHub | Your Daily Dose</title>
    <style>
        /* Basic Styling */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            background-color: #0b0c10;
            color: #ffffff;
        }

        /* Navigation */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            background-color: #1f2833;
        }

        .logo { font-size: 24px; font-weight: bold; color: #66fcf1; }
        
        nav ul { list-style: none; display: flex; }
        
        nav ul li { margin-left: 20px; }
        
        nav ul li a { color: white; text-decoration: none; transition: 0.3s; }
        
        nav ul li a:hover { color: #66fcf1; }

        /* Hero Section */
        .hero {
            height: 400px;
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero h1 { font-size: 50px; margin-bottom: 10px; }

        /* Anime Grid */
        .container { padding: 40px 50px; }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
        }

        .card {
            background: #1f2833;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s;
        }

        .card:hover { transform: scale(1.05); }

        .card img { width: 100%; height: 280px; object-fit: cover; }

        .card-info { padding: 15px; }

        .card-info h3 { margin: 0; font-size: 18px; }

        .tag {
            display: inline-block;
            background: #45a29e;
            padding: 2px 8px;
            border-radius: 5px;
            font-size: 12px;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <nav>
        <div class="logo">AnimeHub</div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">My List</a></li>
        </ul>
    </nav>

    <header class="hero">
        <h1>Welcome to AnimeHub</h1>
        <p>Discover your next favorite adventure.</p>
    </header>

    <div class="container">
        <h2>Trending Now</h2>
        <div class="grid">
            <div class="card">
                <img src="https://via.placeholder.com/200x280" alt="Anime">
                <div class="card-info">
                    <h3>Epic Samurai</h3>
                    <span class="tag">Action</span>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x280" alt="Anime">
                <div class="card-info">
                    <h3>Neon Tokyo</h3>
                    <span class="tag">Sci-Fi</span>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x280" alt="Anime">
                <div class="card-info">
                    <h3>Magic Academy</h3>
                    <span class="tag">Fantasy</span>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x280" alt="Anime">
                <div class="card-info">
                    <h3>Quiet World</h3>
                    <span class="tag">Slice of Life</span>
                </div>
            </div>
        </div>
    </div>

</body>
</html>

