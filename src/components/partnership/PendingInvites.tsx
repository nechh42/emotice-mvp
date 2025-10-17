import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface PendingInvite {
  id: string;
  inviter_email: string;
  created_at: string;
  status: string;
}

const PendingInvites = () => {
  const [pendingInvites, setPendingInvites] = useState<PendingInvite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchPendingInvites();
  }, [user]);

  const fetchPendingInvites = async () => {
    if (!user) return;

    try {
      // Burada gerçek pending invites verilerini çekeceğiz
      // Şimdilik mock data kullanıyoruz
      setPendingInvites([]); // Boş liste - gerçek implementasyonda dolduracağız
    } catch (error) {
      console.error('Error fetching pending invites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccept = async (inviteId: string) => {
    // Invite kabul etme işlemi
    console.log('Accepting invite:', inviteId);
  };

  const handleDecline = async (inviteId: string) => {
    // Invite reddetme işlemi
    console.log('Declining invite:', inviteId);
  };

  if (isLoading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="space-y-3">
      {pendingInvites.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            No pending invitations.
          </p>
        </div>
      ) : (
        pendingInvites.map((invite) => (
          <Card key={invite.id} className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{invite.inviter_email}</p>
                <p className="text-xs text-muted-foreground">
                  Sent {new Date(invite.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  onClick={() => handleAccept(invite.id)}
                >
                  Accept
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDecline(invite.id)}
                >
                  Decline
                </Button>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default PendingInvites;