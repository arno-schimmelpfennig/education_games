import re
def is_palindrome(s):
    s = s.lower()
    s = s.replace(' ', '')
    s = re.sub('[^A-Za-z0-9]+', '', s)
    return s == s[::-1]