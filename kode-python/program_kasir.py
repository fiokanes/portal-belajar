print("================================")
print("TOKO CERIA")
print("================================")
barang1 = input("Nama Barang Pertama : ") 
harga1 = int(input("Harga Barang Pertama : ")) 
jumlah1 = int(input("Jumlah Barang Pertama : "))
barang2 = input("Nama Barang Kedua : ") 
harga2 = int(input("Harga Barang Kedua : ")) 
jumlah2 = int(input("Jumlah Barang Kedua : "))
total1 = harga1 * jumlah1
total2 = harga2 * jumlah2
total_belanja = total1 + total2
print("\n================================")
print(barang1, ":", total1)
print(barang2, ":", total2)
print("================================")
print("Total Belanja : ", total_belanja)
print("================================")
print("Terima kasih telah berbelanja!")
