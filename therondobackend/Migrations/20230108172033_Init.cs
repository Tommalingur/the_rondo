﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace therondoAPI.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    ArticleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HeadLine = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Content = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AdminId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.ArticleId);
                    table.ForeignKey(
                        name: "FK_Articles_Admins_AdminId",
                        column: x => x.AdminId,
                        principalTable: "Admins",
                        principalColumn: "AdminId");
                });

            migrationBuilder.CreateTable(
                name: "NewsPieces",
                columns: table => new
                {
                    NewsPieceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HeadLine = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Content = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AdminId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsPieces", x => x.NewsPieceId);
                    table.ForeignKey(
                        name: "FK_NewsPieces_Admins_AdminId",
                        column: x => x.AdminId,
                        principalTable: "Admins",
                        principalColumn: "AdminId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Content = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comments_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Admins",
                columns: new[] { "AdminId", "FirstName", "LastName", "Password", "UserName" },
                values: new object[] { 1, "Tómas", "Gunnarsson", "SafePW", "Tommi_Admin" });

            migrationBuilder.InsertData(
                table: "Articles",
                columns: new[] { "ArticleId", "AdminId", "Content", "CreatedDate", "HeadLine" },
                values: new object[,]
                {
                    { 1, null, "Awesome article text 1", new DateTime(2023, 1, 8, 17, 20, 33, 474, DateTimeKind.Local).AddTicks(3683), "Lionel Messi can only be stopped by 'prayer'" },
                    { 2, null, "Awesome article text 2", new DateTime(2023, 1, 8, 17, 20, 33, 474, DateTimeKind.Local).AddTicks(3685), "How Barcelona could line up without Lewandowski" },
                    { 3, null, "Awesome article text 3", new DateTime(2023, 1, 8, 17, 20, 33, 474, DateTimeKind.Local).AddTicks(3687), "Three talking points ahead of Atletico Madrid vs Barcelona" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "FirstName", "LastName", "Password", "UserName" },
                values: new object[] { 1, "TheFirst", "Avenger", "America", "Cap" });

            migrationBuilder.InsertData(
                table: "NewsPieces",
                columns: new[] { "NewsPieceId", "AdminId", "Content", "CreatedDate", "HeadLine" },
                values: new object[,]
                {
                    { 1, 1, "Awesome news text 1", new DateTime(2023, 1, 8, 17, 20, 33, 474, DateTimeKind.Local).AddTicks(3712), "Awesome news 1" },
                    { 2, 1, "Awesome news text 2", new DateTime(2023, 1, 8, 17, 20, 33, 474, DateTimeKind.Local).AddTicks(3714), "Awesome news 2" },
                    { 3, 1, "Awesome news text 3", new DateTime(2023, 1, 8, 17, 20, 33, 474, DateTimeKind.Local).AddTicks(3715), "Awesome news 3" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Articles_AdminId",
                table: "Articles",
                column: "AdminId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserId",
                table: "Comments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsPieces_AdminId",
                table: "NewsPieces",
                column: "AdminId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "NewsPieces");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Admins");
        }
    }
}