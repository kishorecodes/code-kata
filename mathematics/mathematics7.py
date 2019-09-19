L,B,H = map(int,(input().split()))
surface = 2 * ((L * B) + (B * H) + (H * L))
volume = L * B * H
print(surface,volume)
