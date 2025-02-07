from datetime import datetime
from django.db import models

class Agent(models.Model):
    agent_name = models.CharField(max_length=200)
    agent_info = models.CharField(max_length=200, blank=True)
    def __str__(self):
        return self.agent_name

class Dealer(models.Model):
    dealer_name = models.CharField(max_length=200)
    dealer_info = models.CharField(max_length=200, blank=True)
    target_lat = models.CharField(max_length=200)
    target_lon = models.CharField(max_length=200)
    def __str__(self):
        return self.dealer_name

class Track(models.Model):
    track_ID = models.CharField(max_length=100, default=123)
    agentt = models.ForeignKey(Agent, on_delete=models.CASCADE)
    dealerr = models.ForeignKey(Dealer, on_delete=models.CASCADE)
    assigned = models.DateTimeField(default=datetime.now())
    visited = models.BooleanField(default=False)
    # date = models.DateTimeField(default=None)
    def __str__(self):
        return self.track_ID
