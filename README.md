# Mon Portfolio

Un portfolio personnel simple développé avec **HTML, CSS et JavaScript**.  
Il contient une page d'accueil, des styles personnalisés, des images, ainsi qu’un fichier CV en PDF.

## 📂 Structure du projet

* asset/ # Librairies externes (bootstrap, font-awesome, etc.)
* css/ # Fichiers CSS (style principal)
* files/ # Ressources (CV en PDF)
* images/ # Images utilisées dans le portfolio
* js/ # Scripts JavaScript (logique + traductions)
* index.html # Page principale
* Dockerfile # Fichier de configuration Docker

## 🐳 Utilisation avec Docker 

1️⃣ Créer une image Docker
```
docker build -t mon-portfolio .
```

2️⃣ Lancer un conteneur
```
docker run -d -p 8080:80 --name portfolio-container mon-portfolio
```

3️⃣ Publier l'image sur Docker Hub
```
docker tag mon-portfolio mahmoudsaadaoui/mon-portfolio:latest
docker push mahmoudsaadaoui/mon-portfolio:latest
```

4️⃣ Récupérer l’image depuis Docker Hub
```
docker pull mahmoudsaadaoui/mon-portfolio:latest
docker run -d -p 5000:80 --name portfolio mahmoudsaadaoui/mon-portfolio:latest
```

## 🔍 Commandes utiles Docker
Lister les images locales:
```
docker images
```

Lister tous les conteneurs (actifs ou stoppés):
```
docker ps -a
```
Afficher les conteneurs en cours d’exécution (running).
```
docker ps
```
Entrer dans un conteneur / inspecter une image:
```
docker exec -it portfolio-container sh
docker inspect mon-portfolio
```

Arrêter / supprimer un conteneur:
```
docker stop portfolio-container
docker rm portfolio-container
```





<!-- 
  01- creation d'un fichier Dockerfile
  02- build d'une image ==> docker build -t <nom_image> <path_dockerfile % path_du_terminal>
  03- runner le conteneur docker ==> docker run -d -p <host_port>:<container_port> --name    <nom_de_container> <image_a_executer>
  04- publier l'image sur dockerhub ==> docker tag <image_id ou image_name> <dockerhub_account>/<nom>:version

  docker push <dockerhub_account>/<nom>:version
  05- obtenir l'image via dockerhub ==> docker pull <nom_image_sur_dockerhub>:version
  06- executer l'image obtenu a partir de dockerhub ==> docker run -d -p 5000:80 mahmoudsaadaoui/mon-portfolio:latest (comme exemple)
-->

<!-- 
  docker inspect <ig_image> ==> entrer a l'interieur de l'image
-->