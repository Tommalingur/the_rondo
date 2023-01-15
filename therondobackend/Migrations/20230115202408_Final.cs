using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace therondoAPI.Migrations
{
    /// <inheritdoc />
    public partial class Final : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "NewsPieces",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Articles",
                keyColumn: "ArticleId",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2023, 1, 15, 20, 24, 8, 471, DateTimeKind.Local).AddTicks(7736));

            migrationBuilder.UpdateData(
                table: "NewsPieces",
                keyColumn: "NewsPieceId",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2023, 1, 15, 20, 24, 8, 471, DateTimeKind.Local).AddTicks(7755));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "NewsPieces",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Articles",
                keyColumn: "ArticleId",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2023, 1, 12, 21, 18, 11, 250, DateTimeKind.Local).AddTicks(3685));

            migrationBuilder.UpdateData(
                table: "NewsPieces",
                keyColumn: "NewsPieceId",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2023, 1, 12, 21, 18, 11, 250, DateTimeKind.Local).AddTicks(3708));
        }
    }
}
