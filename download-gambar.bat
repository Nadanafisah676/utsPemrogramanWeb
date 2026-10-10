@echo off
if not exist public mkdir public
curl -L -f -o public\berita1.png "https://sman1cikarangbarat.sch.id/wp-content/uploads/2026/07/ChatGPT-Image-Jul-9-2026-06_52_17-PM.png"
curl -L -f -o public\berita2.png "https://sman1cikarangbarat.sch.id/wp-content/uploads/2026/06/ChatGPT-Image-Jun-25-2026-08_47_38-AM.png"
curl -L -f -o public\berita3.jpg "https://sman1cikarangbarat.sch.id/wp-content/uploads/2026/05/db939052-c6eb-4e0b-895e-377ef1958514.jpg"
curl -L -f -o public\berita4.png "https://sman1cikarangbarat.sch.id/wp-content/uploads/2025/05/UA8EYMoDSJUVpT3wjSuCO2PNjbPpw9lM9hRzExHJ-600x450.png"
curl -L -f -o public\berita5.png "https://sman1cikarangbarat.sch.id/wp-content/uploads/2025/05/fls3n.png"
curl -L -f -o public\berita6.jpg "https://sman1cikarangbarat.sch.id/wp-content/uploads/2025/05/474443597_2755601914629141_283167967301315571_n.jpg"
curl -L -f -o public\sekolah.jpg "https://sman1cikarangbarat.sch.id/wp-content/uploads/2025/05/CMD_FILE_MANAGER-1.jpg"
echo.
echo Selesai. Cek folder public: harus ada berita1-6 dan sekolah.jpg
dir public
