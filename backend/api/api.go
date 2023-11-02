package api

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Book struct {
	title       string `json:title`
	author      string `json:author`
	description string `json:description`
	genre       string `json:genre`
	price       int64  `json:price`
}

type Users struct {
	token string
}

//list of the items and quantities
//sub total cost
type ShoppingCart struct {
}

var db *sql.DB
var err error

func SetupPostgres() {
	db, err = sql.Open("postgres", "postgres://postgres:password@localhost/book?sslmode=disable")

	if err != nil {
		fmt.Println(err.Error())
	}

	if err = db.Ping(); err != nil {
		fmt.Println(err.Error())
	}

	fmt.Println("connected to postgres")
}

//Fetch all Books
func FetchAllBooks(c *gin.Context) {
	//use select query to obtain all rows
	rows, err := db.Query("SELECT * FROM books")
	if err != nil {
		fmt.Println(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{"message": "error with DB"})
	}
	books := make([]Book, 0)
	if rows != nil {
		defer rows.Close()
		for rows.Next() {
			book := Book{}
			if err := rows.Scan(&book.author, &book.description, &book.genre, &book.title); err != nil {
				fmt.Println(err.Error())
				c.JSON(http.StatusInternalServerError, gin.H{"message": "error with DB"})
			}
			books = append(books, book)
		}
	}

	//
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
	c.JSON(http.StatusOK, gin.H{"books": books})
}

//Fetch by query params title author or genre
func FetchBooksWithParams(c *gin.Context) {
	title := c.Param("title")
	author := c.Param("author")
	genre := c.Param("genre")

	//use select query to obtain all rows
	rows, err := db.Query("SELECT * FROM books WHERE (title=$1 || author=$2 | genre=$3 )")
	if err != nil {
		fmt.Println(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{"message": "error with DB"})
	}
	books := make([]Book, 0)
	if rows != nil {
		defer rows.Close()
		for rows.Next() {
			book := Book{}
			if err := rows.Scan(&book.author, &book.description, &book.genre, &book.title); err != nil {
				fmt.Println(err.Error())
				c.JSON(http.StatusInternalServerError, gin.H{"message": "error with DB"})
			}
			books = append(books, book)
		}
	}

	//
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
	c.JSON(http.StatusOK, gin.H{"books": books})
}
