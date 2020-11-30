###################################################
############ Write a function that takes a #########
######## given string (`str`) and finds the #########
####### longest individual word in that string. #######
#####################################################
def longest_word(str)
    arr = str.split()
    sortedArr = arr.sort_by!(&:length).reverse! 
    p sortedArr[0]
end
puts longest_word("The quick brown fox jumped over the lazy dog")