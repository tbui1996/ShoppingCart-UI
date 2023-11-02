package main

import (
	"github.com/gin-gonic/contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRoutes() *gin.Engine {
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	//set routes for api
	//fetchALL
	router.GET("/allBooks")
	//fetch by search parameters
	router.GET("/books/:title/:author/:genre")

	return router
}

func main() {
	router := SetupRoutes()
	router.Run(":8000")
}
